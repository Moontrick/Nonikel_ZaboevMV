try:
  a = int(input())
  b = int(input())
  if a > (b * 3):
    print("1 число больше пограничного в 3 раза")
  elif a > b:
    print("1 число больше пограничного")
  elif a < b:
    print("1 число меньше пограничного")
except:
  print("Вы где-то ввели не число")
