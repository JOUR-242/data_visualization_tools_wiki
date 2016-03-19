### color_map.py

import csv
from bs4 import BeautifulSoup

f = open('map_output.svg', 'w')

# Read in state occupational employment
employment = {}
reader = csv.reader(open('graphicdesigners.csv'), delimiter=",")
for row in reader:
	try:
		rate = float( row[3].strip() )
		employment[row[0]] = rate
	except:
		pass
		
# Load the SVG map
svg = open('USmap.svg', 'r').read()

# Load into Beautiful Soup
soup = BeautifulSoup(svg, 'xml')

# Find states
paths = soup.findAll('path')

# Map colors
colors = ["#edf8fb", "#b3cde3" , "#8c96c6", "#8856a7", "#810f7c"]

# State style
path_style = 'font-size:12px;fill-rule:nonzero;stroke:#FFFFFF;stroke-opacity:1;stroke-width:0.1;stroke-miterlimit:4;stroke-dasharray:none;stroke-linecap:butt;marker-start:none;stroke-linejoin:bevel;fill:'

# Color the states based on amount of employment
for p in paths:

											
		if p["id"] not in ["State_Lines", "separator"]:
			# pass
			try:
				id = p["id"]
				rate = employment[p["id"]]
			except:
				continue
			
			
		if rate > 800:
			color_class = 4
		elif rate > 600:
			color_class = 3
		elif rate > 400:
			color_class = 2
		elif rate > 200:
			color_class = 1
		else:
			color_class = 0
			
		color = colors[color_class]
		p["style"] =  path_style + color

		
# Output map
print soup.prettify()
f.write(soup.prettify())


			