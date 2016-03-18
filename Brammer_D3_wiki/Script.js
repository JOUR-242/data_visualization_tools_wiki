var bardata = [150, 8, 125, 3, 60, 7.5, 75, 8, 80];

bardata.sort(function compareNumbers(a,b) {
	return a -b;
})

var margin = { top: 30, right: 30, bottom:30, left:30 }

var height = 500 - margin.top - margin.bottom,
	width = 700 - margin.left - margin.right,
	barWidth = 50,
	barOffset = 5;
	
var yScale = d3.scale.linear()
	.domain([0, d3.max(bardata)])	
	.range ([0, height])
	
var xScale = d3.scale.ordinal()
	.domain(d3.range(0, bardata.length))
	.rangeBands([0, width], .10)	
	
var vGuideScale = d3.scale.linear ()
	.domain ([0, d3.max(bardata)])	
	.range ([height, 0])			

var vAxis = d3.svg.axis()
	.scale(vGuideScale)
	.orient('left')
	.ticks(15)
	
var tooltip = d3.select('body').append('div')
	.style('position', 'absolute')	
	.style('padding', '0 10px')
	.style('background', 'white')
	.style('opacity', 0)
	
d3.select('#chart').append('svg')
	.attr('width', width + margin.left + margin.right)
	.attr('height', height + margin.top + margin.bottom)
	.append('g')
	.attr('transform', 'translate('+ margin.left+', '+ margin.top +')')
	.selectAll('rect').data(bardata)
	.enter().append('rect')
		.style('fill', '#8C1419')
		.attr('width', xScale.rangeBand)
		.attr('height', function(d) {
			return yScale(d);
		})
		.attr('x', function(d,i) {
			return xScale(i);
		})
		.attr('y', function(d) {
			return height - yScale(d);
		})
	.on('mouseover', function(d) {
		
		tooltip.transition()	
			.style('opacity', .9)
			
		tooltip.html(d)	
			.style('left', (d3.event.pageX) + 'px')
			.style('top', (d3.event.pageY) + 'px')
			
		d3.select(this)
		.style('opacity', .7)	
		})	
		
	.on('mouseout', function(d) {
		d3.select(this)
		.style('opacity', 1)
		})		
		
var vGuide = d3.select('svg').append('g')
	vAxis(vGuide)
	vGuide.attr('transform', 'translate('+ margin.left +', '+ margin.top +')')
	vGuide.selectAll('path')
		.style({ fill: 'none', stroke: 'none'})
	vGuide.selectAll('line')
		.style({ stroke: "#000"})		