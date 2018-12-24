import json
import random

options_list = []
with open('country-by-capital-city.json') as f:
	data = json.load(f)
print(len(data))
answer_pos = random.randint(0, len(data))
country = data[answer_pos]['country']
answer = data[answer_pos]['city']

print(country)
print(answer)

options_list.append(answer)

def find_capital(countryname):
	return [d for d in data if d['country']==countryname][0]['city']

def mcq_options():
	for i in range(3):
		pos = random.randint(0, len(data))
		options_list.append(data[pos]['city'])

mcq_options()


random.shuffle(options_list)
print(options_list)

