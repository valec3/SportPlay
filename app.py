a, b, c, d = map(int, input().split())

front_middle_max = min(b - a, d - c)


len_max = front_middle_max

print("{:.2f}".format(len_max))
