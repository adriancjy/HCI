import re


if __name__ == '__main__':
    
    text = "5.2 [3.3-4.6]"

    results = re.match(r"/^\d*\.?\d*$/", text)
    print(results.group(0));    
    

