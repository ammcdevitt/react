<!DOCTYPE HTML>
<!--source: https://medium.com/learning-new-stuff/building-your-first-react-js-app-d53b0c98dc -->

<html>

<head>
	<title>Your First React Project</title>
</head>

<style>
div {
	font-family: verdana;
}
</style>

<body>

<div id="content"></div>

<script src="https://fb.me/react-0.14.6.js"></script>
<script src="https://fb.me/react-dom-0.14.6.js"></script>
<script src="http://fb.me/JSXTransformer-0.12.1.js"></script>

<script type="text/jsx">

var DATA = {
	name: 'Anna McDevitt',
	imgURL: 'https://media.licdn.com/mpr/mpr/shrink_100_100/p/1/000/2b3/072/202ffcb.jpg',
	skillList: ['HTML', 'CSS', 'JavaScript', 'Python']
}

var App = React.createClass({
	render: function() {
		return (
			<div>
				<Profile 
					name ={this.props.profileData.name}
					imgURL={this.props.profileData.imgURL} />
				<Skills 
					skillList = {this.props.profileData.skillList} />
			</div>
		);
	}
});

var Profile = React.createClass({
	render: function() {
		return (
			<div>
				<h1>{this.props.name}</h1>
				<img src={this.props.imgURL}/>
			</div>
		);
	}
});

var Skills = React.createClass({
	render: function() {
		var skills = this.props.skillList.map(function(skill, index) {
			return (<li key = {index}>{skill}</li>);
		});
		return (
			<div>
				<h2>Skills:</h2>
				<ul>{skills}</ul>
			</div>
		);
	}
});

ReactDOM.render(<App profileData={DATA}/>, document.getElementById('content'));

</script>
</body>
</html>
