import json

json_as_string = open('videoIds_import.json', 'r')

data = json.loads(f)

print(data[0])


