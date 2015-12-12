import numpy as np
import cv2

cap = cv2.VideoCapture('videoprueba2.mp4') #Se carga un video
while(True):
    # Captura frame por frame
    ret, frame = cap.read()
    # Aquie empieza la manipulacion de los frames
    image = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY) #convierte el frame a escala de gris
    template = cv2.imread('plantilla8.jpg') #se carga la plantilla
    template = cv2.cvtColor(template, cv2.COLOR_BGR2GRAY) # convierte la plantilla a gris
    result = cv2.matchTemplate(image,template, cv2.TM_CCOEFF_NORMED) #utiliza una metrica para hacer la comparacion
    min_val, max_val, min_loc, max_loc = cv2.minMaxLoc(result)#se ajusta a la proporcion de la comparacion
    top_left = max_loc                                   
    h,w = template.shape
    bottom_right = (top_left[0] + w, top_left[1] + h)
    cv2.rectangle(image,top_left, bottom_right,(0,0,255),3) #Dibuja un rectangulo al rededor de la comparacion
    # Imprime la imagen con el rectangulo que muestr la coincidencia
    cv2.imshow('result',image)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Cuando todo se termine, procede a cerrarse la ventana y el codigo.
cap.release()
cv2.destroyAllWindows()
