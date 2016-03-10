import argparse
import pickle

def property_to_encoding(property_type):

	return 


def room_to_encoding(room_type):

	return


def bed_to_encoding(bed_type):

	return

parser = argparse.ArgumentParser()

modelFeaturesIntegers = ['beds', 'bathrooms', 'accommodates', 'num_amenities']
modelFeaturesStrings = ['property_type', 'bed_type', 'room_type']

for feature in modelFeaturesIntegers:
	parser.add_argument(feature, type=int)

for feature in modelFeaturesStrings:
	parser.add_argument(feature)

args = parser.parse_args()

model = pickle.load( open('model.pkl', 'rb') )

