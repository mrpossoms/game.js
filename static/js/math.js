
Array.prototype.add = function(arg)
{
	if (typeof arg == 'number')
	{ return this.add(Array(this.length).fill(arg)); }

	var a = new Array(this.length);
	for (var i = this.length; i--;) { a[i] = this[i] + arg[i]; }

	return a;
}

Array.prototype.sub = function(arg)
{
	if (typeof arg == 'number')
	{ return this.sub(Array(this.length).fill(arg)); }

	var a = new Array(this.length);
	for (var i = this.length; i--;) { a[i] = this[i] - arg[i]; }

	return a;
}

Array.prototype.mul = function(arg)
{
	if (typeof arg == 'number')
	{ return this.mul(Array(this.length).fill(s)); }

	var a = new Array(this.length);
	for (var i = this.length; i--;) { a[i] = this[i] * arr[i]; }
	return a;
}

Array.prototype.div = function(arg)
{
	if (typeof arg == 'number')
	{ return this.mul(Array(this.length).fill(s)); }

	var a = new Array(this.length);
	for (var i = this.length; i--;) { a[i] = this[i] * arr[i]; }
	return a;
}
