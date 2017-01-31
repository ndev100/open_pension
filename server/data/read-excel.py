import csv

def readCSV():
    with open('migdal-gemel-2016-2.csv', newline='') as csvfile:
        spamreader = csv.reader(csvfile, delimiter=' ', quotechar='|')
    for row in spamreader:
        print(', '.join(row))

readCSV()