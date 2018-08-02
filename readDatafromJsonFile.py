import json
import difflib
from difflib import get_close_matches

def dictionary(f):
    data=json.load(open("data.json"))

    if f in data:
        return data[f]
    elif len(get_close_matches(f,data.keys(),cutoff=0.8))>0:

        k=input("Did you mean %s instead ?" % get_close_matches(f,data.keys())[0])
        if(k=='y'):
            return data[get_close_matches(f,data.keys())[0]]
        else:
            return 0
    else:
        return 0


m='y'
while(m=='y'):
    k = input("Enter the text you want to search : ")
    k=k.lower()
    result = dictionary(k)
    if(result!=0):
        print(result)
        m=input("Do you want to search for more words: ")
        m=m.lower()
        if(m=='y' or m=='yes'):
            m='y'
        elif(m=='n' or m=='no'):
            m='n'
            print("Thanks for using!!")
        else:
            print("Wrong Input")
            m='y'

    else:
        print("The word does not exist")
        m = input("Do you want to search more words: ")
        m=m.lower()
        if (m == 'y' or m == 'yes'):
            m = 'y'
        elif (m == 'n' or m == 'no'):
            m = 'n'
            print("Thanks for using!!")
        else:
            print("Wrong Input")
            m = 'y'

