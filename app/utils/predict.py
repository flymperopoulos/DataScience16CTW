import argparse
import pickle

modelFeatures = pickle.load( open('modelFeatures.pkl', 'rb' ))

parser = argparse.ArgumentParser()

for feature in modelFeatures:
	parser.add_argument(feature, type=int)

args = parser.parse_args()

model = pickle.load( open('model.pkl', 'rb') )


print args.accommodates
