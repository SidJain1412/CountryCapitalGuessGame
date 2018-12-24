import json
import random


def option_list():
	options_list = []

	with open('country-by-capital-city.json') as f:
		file = json.load(f)

	data = {}

	answer_pos = random.randint(0, len(file))

	data['country'] = file[answer_pos]['country']
	data['answer'] = file[answer_pos]['city']

	options_list.append(data['answer'])

	for i in range(3):
		pos = random.randint(0, len(file))
		options_list.append(file[pos]['city'])

	data['options'] = options_list

	random.shuffle(options_list)
	
	return data
