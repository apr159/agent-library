import numpy as np
import cv2

cap = cv2.VideoCapture('videoprueba1.mp4')
count = 0
while(True):
    # Capture frame-by-frame
    ret, frame = cap.read()

    # Our operations on the frame come here
    if count < 103:
        image = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        template = cv2.imread('plantilla.jpg')
        template = cv2.cvtColor(template, cv2.COLOR_BGR2GRAY)
        result = cv2.matchTemplate(image,template, cv2.TM_CCOEFF_NORMED)
        min_val, max_val, min_loc, max_loc = cv2.minMaxLoc(result)
        top_left = max_loc
        h,w = template.shape
        bottom_right = (top_left[0] + w, top_left[1] + h)
        cv2.rectangle(image,top_left, bottom_right,(0,0,255),3)

    if (count >= 103 and count < 130):
        image = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        template = cv2.imread('plantilla2.jpg')
        template = cv2.cvtColor(template, cv2.COLOR_BGR2GRAY)
        result = cv2.matchTemplate(image,template, cv2.TM_CCOEFF_NORMED)
        min_val, max_val, min_loc, max_loc = cv2.minMaxLoc(result)
        top_left = max_loc
        h,w = template.shape
        bottom_right = (top_left[0] + w, top_left[1] + h)
        cv2.rectangle(image,top_left, bottom_right,(0,0,255),3)

    if (count >= 130 and count < 144):
        image = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)


    if (count >= 144 and count < 158):
        image = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        template = cv2.imread('plantilla3.jpg')
        template = cv2.cvtColor(template, cv2.COLOR_BGR2GRAY)
        result = cv2.matchTemplate(image,template, cv2.TM_CCOEFF_NORMED)
        min_val, max_val, min_loc, max_loc = cv2.minMaxLoc(result)
        top_left = max_loc
        h,w = template.shape
        bottom_right = (top_left[0] + w, top_left[1] + h)
        cv2.rectangle(image,top_left, bottom_right,(0,0,255),3)

    if (count >= 158 and count < 258):
        image = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        template = cv2.imread('plantilla4.jpg')
        template = cv2.cvtColor(template, cv2.COLOR_BGR2GRAY)
        result = cv2.matchTemplate(image,template, cv2.TM_CCOEFF_NORMED)
        min_val, max_val, min_loc, max_loc = cv2.minMaxLoc(result)
        top_left = max_loc
        h,w = template.shape
        bottom_right = (top_left[0] + w, top_left[1] + h)
        cv2.rectangle(image,top_left, bottom_right,(0,0,255),3)

    if (count >= 258 and count < 278):
        image = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        template = cv2.imread('plantilla5.jpg')
        template = cv2.cvtColor(template, cv2.COLOR_BGR2GRAY)
        result = cv2.matchTemplate(image,template, cv2.TM_CCOEFF_NORMED)
        min_val, max_val, min_loc, max_loc = cv2.minMaxLoc(result)
        top_left = max_loc
        h,w = template.shape
        bottom_right = (top_left[0] + w, top_left[1] + h)
        cv2.rectangle(image,top_left, bottom_right,(0,0,255),3)

    if (count >= 278 and count < 304):
        image = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        

    if (count >= 304 and count < 314):
        image = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        template = cv2.imread('plantilla6.jpg')
        template = cv2.cvtColor(template, cv2.COLOR_BGR2GRAY)
        result = cv2.matchTemplate(image,template, cv2.TM_CCOEFF_NORMED)
        min_val, max_val, min_loc, max_loc = cv2.minMaxLoc(result)
        top_left = max_loc
        h,w = template.shape
        bottom_right = (top_left[0] + w, top_left[1] + h)
        cv2.rectangle(image,top_left, bottom_right,(0,0,255),3)

    if (count >= 314 and count < 331):
        image = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        template = cv2.imread('plantilla7.jpg')
        template = cv2.cvtColor(template, cv2.COLOR_BGR2GRAY)
        result = cv2.matchTemplate(image,template, cv2.TM_CCOEFF_NORMED)
        min_val, max_val, min_loc, max_loc = cv2.minMaxLoc(result)
        top_left = max_loc
        h,w = template.shape
        bottom_right = (top_left[0] + w, top_left[1] + h)
        cv2.rectangle(image,top_left, bottom_right,(0,0,255),3)

    count = count + 1
 
    # Display the resulting frame
    backtorgb = cv2.cvtColor(image,cv2.COLOR_GRAY2RGB)
    cv2.imshow('result',backtorgb)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# When everything done, release the capture
cap.release()
cv2.destroyAllWindows()


#CV_TM_SQDIFF
#CV_TM_SQDIFF_NORMED
#CV_TM_CCORR_NORMED
#CV_TM_CCOEFF
#CV_TM_CCOEFF_NORMED