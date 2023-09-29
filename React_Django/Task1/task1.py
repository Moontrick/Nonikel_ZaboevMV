def task1(lst):
  for i in lst:
    if i%2 == 0:
      print(i, end=' ')
    if i == 237:
      print()
      break;  

#Тесты:
task1([1, 2, 3, 4, 5, 6, 7, 8, 8, 237, 10]) 

task1([1, 2,  237, 10, 3, 4, 5, 6, 7, 8, 8])

task1(list(range(1,238)))