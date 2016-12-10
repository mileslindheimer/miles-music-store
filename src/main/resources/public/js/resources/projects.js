var projects = [
	{
		id: 'imageprocessing',
		name: 'Convolution Optimization', 
		img: 'img/projects/imageprocessing/lena512.bmp', 
		description: 'Optimized naive implementation of 2D image convolution using parallelization, loop unrolling, and cache blocking - 6000% speedup'
	},
  {
  	id: '1',
  	name: 'Saxophone', 
  	img: 'img/products/saxophone.jpg',
  	description: 'Instrument of choice for careless whisperers.',
    price: 1300.00
  },
  {
  	id: 'shader',
  	name: '3D Shader', 
  	img: 'img/thumbnails/shader_thumbnail.png',
  	description: 'Generates 3D sphere based on lighting position and color',
    github: 'https://github.com/jesca/Graphics'
  },
  {
    id: 'cpu',
    name: 'Virtual CPU', 
    img: 'img/thumbnails/cpu_thumbnail.png',
    description: '16 bit, 4 Registers, runs MIPS, built in Logisim'
  },
  {
    id: 'bezier',
    name: 'Bezier Graphics Engine', 
    img: 'img/thumbnails/bezier_thumbnail.png',
    description: 'Generates 3D rendering with interactive control, based on input of Bezier patches'
  },
  {
    id: 'puzzlesolver',
    name: 'Traffic Jam Puzzle Solver', 
    img: 'img/thumbnails/puzzlesolver_thumbnail.jpg',
    description: 'Implemented framework for the game and solve using A*'
  },
  {
    id: 'reliabletransport',
    name: 'Reliable Transport', 
    img: 'img/thumbnails/reliabletransport_thumbnail.gif',
    description: 'TCP inspired packet transport protocol in Python'
  },
  {
    id: 'firewall',
    name: 'Firewall', 
    img: 'img/thumbnails/firewall_thumbnail.png',
    description: 'Passive firewall that passes or drops packets, terminates connections, and performs redirects, configured by a rules file',
    github: 'https://github.com/mileslindheimer/firewall'
  },
  {
    id: 'wordcoocurrence',
    name: 'Word Co-Occurence', 
    img: 'img/thumbnails/mapreduce_thumbnail.png',
    description: 'Calculates co-occurrence rates in large texts'
  },
  {
    id: 'dnsresolver',
    name: 'Distributed DNS Resolver', 
    img: 'img/thumbnails/dns-rev-1.gif',
    description: 'Implemented non-blocking symmetric hash join within Spark’s source code for a DNS resolve',
    github: 'https://github.com/mileslindheimer/cs186_projects/tree/master/hw4'
  },
  {
    id: 'opticalflow',
    name: 'Optical Flow Gesture Tracker', 
    img: 'img/thumbnails/opticalflow.jpg',
    description: 'Detects and tracks hand gestures using Pyramidal Lucas-Kanade method for optical flow analysis',
    github: 'https://github.com/mileslindheimer/optical-flow'
  },
  {
    id: 'udfcache',
    name: 'User-Defined Function Caching', 
    img: 'img/thumbnails/udfcaching.png',
    description: 'Implemented disk hash-partitioning and UDF caching in a distributed computing framework',
    github: 'https://github.com/mileslindheimer/cs186_projects/tree/master/hw2'
  }
];

module.exports = projects;