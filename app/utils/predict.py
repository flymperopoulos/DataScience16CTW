import argparse
import pickle
import numpy as np
import re
import pickle
from sklearn.externals import joblib

from sklearn import linear_model


mappings = pickle.load(open("utils/newmapping.pkl", "rb"))
list_of_bed_types = ['Airbed', 'Couch', 'Futon', 'Pull-out Sofa', 'Real Bed']
list_of_room_types = ['Entire home/apt', 'Private room', 'Shared room']

list_of_bed_types_mapping = {'Airbed':0, 'Couch':1, 'Futon':2, 'Pull-out Sofa':3, 'Real Bed':4}
list_of_room_types_mapping = {'Entire home/apt':2, 'Private room':1, 'Shared room':0}

def neighborhood_to_binary(neighborhood):
	for neighborhoodKey in mappings.keys():
		if neighborhoodKey == neighborhood:
			binary = '{0:09b}'.format(mappings[neighborhoodKey])
			res = map(int, str(binary)) 
	return res

def property_to_binary(property_type):
	for propertyKey in mappings.keys():
		if propertyKey == property_type:
			binary = '{0:05b}'.format(mappings[propertyKey])
			res = map(int, str(binary)) 
	return res

def type_to_ordinal(type):
	for type_key in mappings.keys():
		if type_key == type:
			ordinal_val = mappings[type]
	return ordinal_val


def type_one_hot_encoding(type, list_of_types, type_mapping):
	one_hot = [' '.join(['0']*a + ['1'] + ['0']*b)
	            for a, b in zip(range(len(list_of_types)), range(len(list_of_types)-1, -1, -1))]
	yes = one_hot[type_mapping[type]]
	d = [int(yes[i:i+2]) for i in range(0, len(yes), 2)]
	return d


def bed_stuff(bed_type):
	res = [type_to_ordinal(bed_type)] + type_one_hot_encoding(bed_type,list_of_bed_types,list_of_bed_types_mapping)
	return res

def concat_stuff(neighborhood, bed_type, room_type, property_type):
	res = neighborhood_to_binary(neighborhood)+ [type_to_ordinal(bed_type)] + type_one_hot_encoding(bed_type,list_of_bed_types,list_of_bed_types_mapping)+[type_to_ordinal(room_type)] + type_one_hot_encoding(room_type,list_of_room_types,list_of_room_types_mapping) + property_to_binary(property_type)
	return res

parser = argparse.ArgumentParser()

modelFeaturesStrings = ['bed_type', 'room_type', 'property_type', 'neighbourhood']
modelFeaturesIntegers = ['beds', 'bathrooms', 'accommodates', 'bedrooms']

for feature in modelFeaturesStrings:
	parser.add_argument(feature)

for feature in modelFeaturesIntegers:
	parser.add_argument(feature, type=int)

args = parser.parse_args()

encoded_categorical = concat_stuff(args.neighbourhood, args.bed_type, args.room_type, args.property_type)

all_features = [args.beds, args.bathrooms, args.accommodates, args.bedrooms] + encoded_categorical

listing = np.array(all_features)
listing = listing.reshape(1,-1)

model = joblib.load('utils/lasso.pkl')

print model.predict(listing)[0]

