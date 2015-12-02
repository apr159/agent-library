from game import Agent
from game import Directions
from random import randint

class DumbAgent(Agent):

  def getAction(self, state):
    pos = state.getPacmanPosition()
    print "Locacion: ", pos, "MOdi ", pos[0]
    print "Accion valida: ", state.getLegalPacmanActions()
    if Directions.WEST in state.getLegalPacmanActions():
      print "Yendo Oeste."
      return Directions.WEST
    else:
      print "Yendo Oeste."
      return Directions.STOP

class myAgent(Agent):
  def getAction(self,state):
    legal = state.getLegalPacmanActions()
    if Directions.SOUTH in legal: return Directions.SOUTH
    else:
      if Directions.WEST in legal:return Directions.WEST
      else:
        if Directions.NORTH in legal:return Directions.NORTH
        else: return Directions.EAST
        
class RandomAgent(Agent):
  def getAction(self, state):
    while True:
      legal = state.getLegalPacmanActions()
      a = randint(1,4)
      print a
      if a == 0 and Directions.STOP in legal:
        print "Deteniendose"
        return Directions.STOP
      elif a== 1 and Directions.NORTH in legal:
        print "Yendo Norte"
        return Directions.NORTH
      elif a == 2 and Directions.EAST in legal:
        print "Yendo al Este"
        return Directions.EAST
      elif  a== 3 and Directions.SOUTH in legal:
        print "Yendo al Sur"
        return Directions.SOUTH
      elif  a== 4 and Directions.WEST in legal:
        print "Yendo al Oeste"
        return Directions.WEST

class ReflexAgent(Agent):
  def getAction(self,state):
    pos = state.getPacmanPosition()
    currentFood = state.getFood()
#    visit = [False, False, False, False] #norte,este,sur,oeste
    legal = state.getLegalPacmanActions()
    #print legal
    n = len(legal)
    MYvector =[]
    for i in range(0,n):
      MYvector.append(False)
    #print n
    while True:
      a = randint(0,n-1)
      #print  "pos = ",a, " = ",legal[a]
      #print MYvector
      if legal[a] == Directions.STOP:        MYvector[a]= True
      if legal[a] == Directions.NORTH and currentFood[pos[0]][pos[1] +1]:
        return legal[a]
      else:
        MYvector[a]= True
      if legal[a] == Directions.EAST and currentFood[pos[0] +1][pos[1]]:
        return legal[a]
      else:
        MYvector[a]= True
      if legal[a] == Directions.SOUTH and currentFood[pos[0]][pos[1] -1]:
        return legal[a]
      else:
        MYvector[a]= True
      if legal[a] == Directions.WEST and currentFood[pos[0] -1][pos[1]]:
        return legal[a]
      else:
        MYvector[a]= True
      for i in range(0,n):
        if MYvector[i] == False: break
        if i==n-1 and legal[a] != Directions.STOP:
          #print "Todo verdad"
          return legal[a]


      
      
       
