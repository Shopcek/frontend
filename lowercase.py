import os

basepath = 'src/'

from pprint import pprint

def lowercase(path):
    if path == 'src/':
        return
    os.rename(path, path.split('/')[-1].lower())

def walk(path):
    for _ in os.walk(path):
        pwd = _[0]
        print(pwd)

        if pwd == 'src/':
            continue    

        if not os.path.isdir(pwd):
            continue 


        lower = pwd.lower()
        # lower = pwd.split('/')[-1].lower()
        os.rename(pwd, lower)
        print(pwd, lower)
        #walk(lower)


walk(basepath)
# pprint([x[0] for x in os.walk(basepath)])
