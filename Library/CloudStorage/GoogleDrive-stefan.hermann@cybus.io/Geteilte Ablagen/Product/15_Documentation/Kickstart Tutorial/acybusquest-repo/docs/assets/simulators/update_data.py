import time, base64, requests, struct, math, random

# Service-Namen im Docker-Netzwerk
SERVICES = [
    "s7-simulator-welding",
    "s7-simulator-punching",
    "s7-simulator-packaging",
    "s7-simulator-inspection",
    "s7-simulator-painting",
    "s7-simulator-warehouse",
    "s7-simulator-storage",
    "s7-simulator-agv",
]
DB_ID = 1

# Laufzähler für Werte
counter = 0

def get_raw_datablock(service: str):
    url = f"http://{service}:8080/api/datablocks/{DB_ID}"
    r = requests.get(url, timeout=5)
    r.raise_for_status()
    js = r.json()
    raw = js.get("Data") or js.get("data")
    if isinstance(raw, str):
        return bytearray(base64.b64decode(raw))
    if isinstance(raw, list):
        return bytearray(raw)
    raise TypeError(f"Unbekannter Datentyp von {service}: {type(raw)}")

def put_raw_datablock(service: str, data: bytearray):
    b64 = base64.b64encode(bytes(data)).decode("ascii")
    url = f"http://{service}:8080/api/datablocks/{DB_ID}"
    r = requests.put(url, json=b64, timeout=5)
    r.raise_for_status()

def write_real(data: bytearray, offset: int, value: float):
    # IEEE 754 little endian float
    struct.pack_into('<f', data, offset, value)

def write_dint(data: bytearray, offset: int, value: int):
    struct.pack_into('<i', data, offset, value)

def write_int(data: bytearray, offset: int, value: int):
    struct.pack_into('<h', data, offset, value)

if __name__ == "__main__":
    counter = 0
    while True:
        for svc in SERVICES:
            try:
                db = get_raw_datablock(svc)

                # dynamische Werte berechnen
                t = time.time()
                position    = math.sin(t) * 10.0 + 50.0       # z.B. sinusförmig 40..60
                weld_current= float(counter % 100) + 0.1      # 0.1..99.1
                weld_voltage= random.uniform(200.0, 240.0)    # zwischen 200 und 240
                weld_speed  = counter * 10                    # steigender Integer
                status      = counter % 2                     # 0 oder 1

                # ins Byte-Array schreiben
                write_real(db,  0, position)
                write_real(db,  4, weld_current)
                write_real(db,  8, weld_voltage)
                write_dint(db, 12, weld_speed)
                write_int(db, 16, status)

                put_raw_datablock(svc, db)
                print(f"[{svc}] pos={position:.2f} cur={weld_current:.1f} volt={weld_voltage:.1f} speed={weld_speed} st={status}")
            except Exception as e:
                print(f"[ERROR {svc}] {e}")

        counter += 1
        time.sleep(1)
