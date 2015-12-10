from game import Agent
from game import Directions
import random
import time
import math

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


ALPHA = 0.2
GAMMA = 0.8
EPSILON = 0.6
estados = []
acciones= []
Q = []
lastQ = []
lastState = []
lastActionIndex = []

class myAgent(Agent):

  def __init__(self):
    global estados
    estados = self.dataIn("data")
    global acciones
    acciones = self.dataIn("qdata")
    global Q 
    Q = self.buildQTable(estados, acciones)
    estados = []
    acciones = []

  def __del__(self):
    self.saveQ()
    self.dataOutEstados("data")
    self.dataOutAcciones("qdata")

  def dataIn(self, archivo):
    with open(archivo) as data_in:
      edos = data_in.readlines()
    data_in.close()
    #print edos
    for i in range (len(edos)):
      edos[i] = edos[i].rstrip()
    #print edos
    return edos

  def dataOutEstados(self, archivo):
    data_out = open(archivo, 'w')
    global estados
    for i in range (len(estados)):
      estados[i] = estados[i] + '\n'
    data_out.writelines(estados)
    data_out.close()
    #print estados

  def dataOutAcciones(self, archivo):
    data_out = open(archivo, 'w')
    global acciones
    for i in range (len(acciones)):
      acciones[i] = acciones[i] + '\n'
    data_out.writelines(acciones)
    data_out.close()

  def generateMyState(self, state):
    pacPos = state.getPacmanPosition()
    ghosPos = state.getGhostPosition(1)
    myState = str(pacPos) + " " + str(ghosPos)
    myState = myState.replace(',', '')
    myState = myState.replace('(', '')
    myState = myState.replace(')', '')
    print myState
    return myState

  def generateMyActions(self, state):
    myActions = []
    possibleActions = state.getLegalPacmanActions()
    myActions.append(random.uniform(0,1)) if 'Stop' in possibleActions else myActions.append(0)
    myActions.append(random.uniform(0,1)) if 'North' in possibleActions else myActions.append(0)
    myActions.append(random.uniform(0,1)) if 'South' in possibleActions else myActions.append(0)
    myActions.append(random.uniform(0,1)) if 'East' in possibleActions else myActions.append(0)
    myActions.append(random.uniform(0,1)) if 'West' in possibleActions else myActions.append(0)
    return myActions

  def generateMyQ(self, strState, accion):
    return [strState, accion]
  
  def buildQTable(self, estados, acciones):
    Q = []
    if len(acciones) == len(estados):
      for i in range (len(acciones)):
        estado = estados[i]
        strAccion = acciones[i].split()
        accion = []
        for i in strAccion:
          accion.append(float(i))
        lista = [estado, accion]
        Q.append(lista)
      return Q
    else : 
      print "Q-table corrupta, los indices no coinciden."

  def saveQ(self):
    global estados
    global acciones
    for i in range (len(Q)):
      estados.append(Q[i][0])
      accion = str(Q[i][1]).strip('[]')
      accion = accion.replace(',', '')
      acciones.append(accion)

  def checkState(self, state):
    global Q
    strState = self.generateMyState(state)
    print "len Q = ", len(Q)
    for i in range (len(Q)):
      if strState in Q[i]: #checa string de estado en Qstate
        print "estado encontrado en ", i
        return Q[i]
    print "estado no encontrado"
    accion = self.generateMyActions(state)
    newQ = self.generateMyQ(strState, accion)
    Q.append(newQ)
    index = Q.index(newQ)
    return Q[index]

  def getMaxAction(self, currentQ, state):
    eps = random.uniform(0,1)
    if eps > EPSILON: 
      maxAction = random.randint(0, 4)
      print 'random'
    else: 
      maxAction = currentQ[1].index(max(currentQ[1]))
      print 'max'
    print 'maxAction = ', maxAction
    legal = state.getLegalPacmanActions()
    syncList = []
    if 'Stop' in legal: syncList.append(0)
    if 'North' in legal: syncList.append(1)
    if 'South' in legal: syncList.append(2)
    if 'East' in legal: syncList.append(3)
    if 'West' in legal: syncList.append(4)
    print syncList
    if maxAction in syncList:
      if maxAction == 0 : return Directions.STOP, maxAction
      elif maxAction == 1 : return Directions.NORTH, maxAction
      elif maxAction == 2 : return Directions.SOUTH, maxAction
      elif maxAction == 3 : return Directions.EAST, maxAction
      elif maxAction == 4 : return Directions.WEST, maxAction
      else: print 'error en indice de accion maxima'
    else:
      print 'accion maxima no esta en la lista de acciones legales'
      currentQ[1][maxAction] = currentQ[1][maxAction] - 10000
      print currentQ[1][maxAction]
      return self.getMaxAction(currentQ, state)

  def getReward(self, state):
    absDist = self.getEuclidianDistance(state)
    score = state.getScore()
    nFood = state.getNumFood()
    print 'nFood = ', nFood
    if nFood == 0: return 10000
    elif nFood > 0 and nFood <= 15:
      if absDist < 3: return -500
      else: return 250
    elif nFood > 15 and nFood <= 30:
      if absDist < 3: return -500
      else: return 50
    else:
      if absDist < 3: return -500
      else: return-5

    '''  
    if absDist<2:
      if score >= 0: return -5000
      else: return score
    else:
      if score >= 400: return 1000
      elif score < 400 and score >= 250: return 250
      elif score < 250 and score >= 100: return 50
      elif score < 100 and score >= 0: return 1
      else: return score
    '''

  def updateQ(self, lastQ, currentQ, lastState, state, currentActionIndex, lastActionIndex):
    reward = self.getReward(state)
    print 'reward = ', reward
    lastQ[1][lastActionIndex] = lastQ[1][lastActionIndex] + ALPHA*(reward + GAMMA*max(currentQ[1]) - lastQ[1][lastActionIndex])

  def getEuclidianDistance(self, state):
    pacPos = state.getPacmanPosition()
    ghosPos = state.getGhostPosition(1)
    eucDistance = math.sqrt((pacPos[0]-ghosPos[0])**2 + (pacPos[1]-ghosPos[1])**2)
    print pacPos, ghosPos, eucDistance
    return eucDistance

  def getAction(self,state):
    global lastQ
    global lastState
    global lastActionIndex
    currentQ = self.checkState(state) 
    currentAction, currentActionIndex = self.getMaxAction(currentQ, state)
    if lastQ: self.updateQ(lastQ, currentQ, lastState, state, currentActionIndex, lastActionIndex)
    lastQ = currentQ
    lastState = state
    lastActionIndex = currentActionIndex
    return currentAction
        
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


      
      
       
