# L=[3,5,7,6,2,0,1]
# for i in range(0,len(L),2):
#     print(L[i])
# for i in range(1,len(L),2):
#     print(L[i])

L=[3,5,7,6,2,0,1]
L1 = [1,43,54,64,21]
min_val = L[0]
max_val = L[0]
min_val1 = L1[0]
max_val1 = L1[0]
for num, num1 in zip(L, L1):
    if num < min_val and num1 < min_val1:
        min_val, min_val1 = num, num1
    if num > max_val and num1 > max_val1:
        max_val, max_val1 = num, num1
print("Sum:", min_val + max_val)
print("Sum:", min_val1 + max_val1)

l = [1, 2, 3, 4]
total = 1
for i in l:
    total *= i
result = []
for i in l:
    result.append(total // i)
print(result)

l=[2,0,3,4,0,5]
total = 1
for i in l:
    total*= i
result = [] 
for i in l:
    result.append(total // i if i != 0 else 0)
print(result)