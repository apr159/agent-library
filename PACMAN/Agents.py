#Agentes desarrollados para el proyecto final del curso de inteligencia artificial
#Autores: Álvaro Gómez, Rudy Sánchez, Andrea Ortíz
#Fecha: 15/diciembre/2015
#Nota: el código base para la simulación y ejecución del juego es obra de
# UC Berkeley, http://ai.berkeley.edu
from game import Agent
from game import Directions
import random
import time
import math

class DumbAgent(Agent):
  """
  El DumbAgent es un agente muy simple que solo va al oeste mientras pueda
  y si no puede, simplemente se detiene. Sirvió como práctica.
  """

  def getAction(self, state):
    pos = state.getPacmanPosition()
    print "Locacion: ", pos, "MOdi ", pos[0]
    print "Accion valida: ", state.getLegalPacmanActions()
    if Directions.WEST in state.getLegalPacmanActions():
      print "Yendo Oeste."
      return Directions.WEST
    else:
      print "Yendo Oeste."
      return Directions.EAST

"""variables globales útiles para el agente myAgent """
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
  """
  Esta clase simula al agente que va a controlar al pacman y va interactuar con su entorno
  teniendo un aprendizaje por refuerzo
  """
  def __init__(self):
    """
    Constructor que invoca los archivos que contienen la última información guardada de los aprendizajes que 
    ha tenido el agente y esa información es guardada en Q
    """
    global estados
    estados = self.dataIn("data")
    global acciones
    acciones = self.dataIn("qdata")
    global Q 
    Q = self.buildQTable(estados, acciones)
    estados = []
    acciones = []

  def __del__(self):
    """
    En el destructor se hace un guardado de la información obtenida en tiempo de ejecución en los archivos
    para que la próxima vez que se ejecute se pueda tener los últimos datos obtenidos
    """
    self.saveQ()
    self.dataOutEstados("data")
    self.dataOutAcciones("qdata")

  def dataIn(self, archivo):
    """
    dataIn da la funcionalidad de abrir y leer un archivo especificado por parámetro para guardarlo en edos
    """
    with open(archivo) as data_in:
      edos = data_in.readlines()
    data_in.close()
    #print edos
    for i in range (len(edos)):
      edos[i] = edos[i].rstrip()
    #print edos
    return edos

  def dataOutEstados(self, archivo):
    """
    dataOutEstados da la funcionalidad de abrir y escribir un archivo especificado por parámetro para guardar los últimos datos obtenidos
    en este caso se guarda especificamente la información de los estados del juego actual considerando solo la posición del pacman y del fantasma
    """
    data_out = open(archivo, 'w')
    global estados
    for i in range (len(estados)):
      estados[i] = estados[i] + '\n'
    data_out.writelines(estados)
    data_out.close()
    #print estados

  def dataOutAcciones(self, archivo):
    """
    dataOutAcciones da la funcionalidad de abrir y escribir un archivo especificado por parametro para guardar los ultimos datos obtenidos
    en este caso se guarda especificamente la informacion de las acciones posibles del juego actual considerando solo la posición del pacman
    """
    data_out = open(archivo, 'w')
    global acciones
    for i in range (len(acciones)):
      acciones[i] = acciones[i] + '\n'
    data_out.writelines(acciones)
    data_out.close()

  def generateMyState(self, state):
    """
    generateMyState obtiene la informacion del la posición del pacman y del fantasma para que estos sean guardados y en base a estos
    se puedan tomar decisiones, esta información es guardada en el archivo data
    """
    pacPos = state.getPacmanPosition()
    ghosPos = state.getGhostPosition(1)
    myState = str(pacPos) + " " + str(ghosPos)
    myState = myState.replace(',', '') #borrar caracteres no deseados del string
    myState = myState.replace('(', '')
    myState = myState.replace(')', '')
    #print myState
    return myState

  def generateMyActions(self, state):
    """
    generateMyActions obtiene las acciones posibles del pacman las cuales son ingresadas a myActions con el proposito de guardar
    esta información en el archivo qdata
    """
    myActions = []
    possibleActions = state.getLegalPacmanActions()
    myActions.append(random.uniform(0,1)) if 'Stop' in possibleActions else myActions.append(0) #si es legal se agrega a myActions
    myActions.append(random.uniform(0,1)) if 'North' in possibleActions else myActions.append(0)
    myActions.append(random.uniform(0,1)) if 'South' in possibleActions else myActions.append(0)
    myActions.append(random.uniform(0,1)) if 'East' in possibleActions else myActions.append(0)
    myActions.append(random.uniform(0,1)) if 'West' in possibleActions else myActions.append(0)
    return myActions

  def generateMyQ(self, strState, accion):
    """
    Junta en un solo arreglo la informacion de los estados y de las acciones para ese estado
    """
    return [strState, accion]
  
  def buildQTable(self, estados, acciones):
    """
    Contruye un arreglo bidimencional que contenga tanto la información de las acciones y de los estados en Q
    este arreglo va a ser el que se esté manipulando para la consulta y actualización de la información
    generada por el aprendizaje que tenga el agente
    """
    Q = []
    if len(acciones) == len(estados): #si el arreglo acciones y estados tienen la misma cantidad de datos
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
    """
    Se convierte en string los datos de la tabla Q. Con el propósito de guardar esos datos en qdata y data respectivamente
    """
    global estados
    global acciones
    for i in range (len(Q)):
      estados.append(Q[i][0]) #corresponde a las posiciones para cada estado visitado 
      accion = str(Q[i][1]).strip('[]') #correspodne a las datos de las acciones disponibles para los estados visitados
      accion = accion.replace(',', '')
      acciones.append(accion)

  def checkState(self, state):
    """
    Para cada acción tomada por el agente se corrobora si ya la había tomado para actualizar la información
    o para crear el registro de este.
    """
    global Q
    strState = self.generateMyState(state)
    #print "len Q = ", len(Q)
    for i in range (len(Q)):
      if strState in Q[i]: #checa string de estado en Qstate
        #print "estado encontrado en ", i
        return Q[i]
    #print "estado no encontrado"
    accion = self.generateMyActions(state)
    newQ = self.generateMyQ(strState, accion)
    Q.append(newQ) #se agrega a la tabla Q
    index = Q.index(newQ)
    return Q[index] #Regresar la referencia de donde se encontró o agregó la información

  def getMaxAction(self, currentQ, state):
    """
    Para el 60 por ciento de las ocasiones se regresa la opción con mayor puntuación y el 40 por ciento se toma una acción al azar
    con base a esto el agente "decide" que hacer para cada estado y las puntuación de las acciones
    """
    eps = random.uniform(0,1)
    if eps > EPSILON: 
      maxAction = random.randint(0, 4) #tomar acción aleatoria
      #print 'random'
    else: 
      maxAction = currentQ[1].index(max(currentQ[1])) #tomar acción con la máxima puntuación
      #print 'max'
    #print 'maxAction = ', maxAction
    legal = state.getLegalPacmanActions()
    syncList = []
    if 'Stop' in legal: syncList.append(0)
    if 'North' in legal: syncList.append(1)
    if 'South' in legal: syncList.append(2)
    if 'East' in legal: syncList.append(3)
    if 'West' in legal: syncList.append(4)
    #print syncList
    if maxAction in syncList: #verificar si la acción tomada (ya sea por máxima puntuación o tomada al azar) existe en las acciónes posibles para el estado actual
      if maxAction == 0 : return Directions.STOP, maxAction
      elif maxAction == 1 : return Directions.NORTH, maxAction
      elif maxAction == 2 : return Directions.SOUTH, maxAction
      elif maxAction == 3 : return Directions.EAST, maxAction
      elif maxAction == 4 : return Directions.WEST, maxAction
      else: print 'error en indice de accion maxima'
    else:
      #print 'accion maxima no esta en la lista de acciones legales'
      currentQ[1][maxAction] = currentQ[1][maxAction] - 10000 #penalización por tomar una acción inválida
      #print currentQ[1][maxAction]
      return self.getMaxAction(currentQ, state)

  def getReward(self, state):
    """
    Se obtiene la recompensa para el estado actual. Se toma en cuenta únicamente la posición actual del fantasma y del pacman, y de la cantidad de comida
    actual en el entorno
    """
    absDist = self.getEuclidianDistance(state) #distancia entre pacman y el fantasma
    score = state.getScore()
    nFood = state.getNumFood()
    #print 'nFood = ', nFood
    if nFood == 0: return 10000 #puntuación alta por haber comido toda la comida en el entorno
    elif nFood > 0 and nFood <= 15:
      if absDist < 3: return -500
      else: return 250
    elif nFood > 15 and nFood <= 30:
      if absDist < 3: return -500
      else: return 50
    else:
      if absDist < 3: return -500 #si el fantasma y pacman están muy cerca se penaliza
      else: return-5 #si pacman no se encuentra comiendo se otorga una pequeña recompensa negativa

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
    """
    se actualiza la puntuación para la acción actual según los datos del estado pasado para la misma acción
    """
    reward = self.getReward(state)
#    print 'reward = ', reward
    lastQ[1][lastActionIndex] = lastQ[1][lastActionIndex] + ALPHA*(reward + GAMMA*max(currentQ[1]) - lastQ[1][lastActionIndex]) #ecuación característica de Q-Learning

  def getEuclidianDistance(self, state):
    """
    Obtener la distancia euclidiana entre el fantasma y pacman
    """
    pacPos = state.getPacmanPosition()
    ghosPos = state.getGhostPosition(1)
    eucDistance = math.sqrt((pacPos[0]-ghosPos[0])**2 + (pacPos[1]-ghosPos[1])**2)
    #print pacPos, ghosPos, eucDistance
    return eucDistance

  def getAction(self,state):
    """
    getAction define las acciones que efectuará el agente en cada estado nuevo
    """
    global lastQ
    global lastState
    global lastActionIndex
    currentQ = self.checkState(state) #corroborar si el estado presente ya está registrado en dado caso se hace el registro o se actualiza
    currentAction, currentActionIndex = self.getMaxAction(currentQ, state) #obtener la accion a realizar
    if lastQ: self.updateQ(lastQ, currentQ, lastState, state, currentActionIndex, lastActionIndex) #calcular el nuevo valor del estado y si ya existia actualizarlo
    lastQ = currentQ
    lastState = state
    lastActionIndex = currentActionIndex
    return currentAction
        
class RandomAgent(Agent):
  """
  Agente que toma acciones aleatoriamente
  """
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
  """
  Agente que busca comida a sus alrededores y va por ella, si no hay comida cerca, se toman acciones al azar.
  """
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
      a = randint(0,n-1) #acción al azar que solo se ejecutaran si existe comida cerca
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
        if MYvector[i] == False: break #si en todas las posibles acciones no hay comida entonces tomar la acción al azar
        if i==n-1 and legal[a] != Directions.STOP:
          #print "Todo verdad"
          return legal[a]


      
      
       
