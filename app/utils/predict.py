import argparse
import pickle

mappings = pickle.load(open('mappings.pkl', 'rb'))

print mappings

def property_to_encoding(property_type):

	pass 


def room_to_encoding(room_type):

	pass


def bed_to_encoding(bed_type):

	pass

parser = argparse.ArgumentParser()

modelFeaturesIntegers = ['beds', 'bathrooms', 'accommodates', 'num_amenities']
modelFeaturesStrings = ['property_type', 'bed_type', 'room_type']

for feature in modelFeaturesIntegers:
	parser.add_argument(feature, type=int)

for feature in modelFeaturesStrings:
	parser.add_argument(feature)

args = parser.parse_args()

model = pickle.load( open('model.pkl', 'rb') )

