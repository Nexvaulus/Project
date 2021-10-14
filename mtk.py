data = ["ucup", "udin", "mamat", 1, 2, 4, "5", True]
print(data)

x = 0

while x < len(data):
    # print("index ke ", (x+1), " adalah ", data[x], " bertipe ", type(data[x]))
    print(f"index ke {x+1} dalam list adalah {data[x]} bertipe {type(data[x])}")
    x += 1

