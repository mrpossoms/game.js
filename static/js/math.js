Array.prototype.row_count = function() { return this.length; }
Array.prototype.col_count = function() { return this[0].length; }

Array.prototype.new_mat = function(rows, cols)
{
	rows = rows ? rows : this.row_count();
	cols = cols ? cols : this.col_count();
	return (new Array(rows)).fill(new Array(cols));
}

Array.prototype.for_each = function(callback)
{
	for (var r = 0; r < this.row_count(); ++r)
	for (var c = 0; c < this.col_count(); ++c)
	{
		callback(this, r, c);
	}
	return this;
}

Array.prototype.promote_to_mat = function(arg)
{
	if (typeof arg == 'number')
	{
		return this.new_mat().for_each(function (M, r, c) {
			M[r][c] = arg;
		});
	}
	else if (arg instanceof Array)
	{
		if (!arg[0] instanceof Array) return [arg];
	}

	return arg;
}

Array.prototype.same_rank_as = function(arg)
{
	return this.row_count() == arg.row_count() && this.col_count() == arg.col_count();
}

Array.prototype.flatten = function()
{
	var a = this.promote_to_mat(this)
	var rows = a.row_count(), cols = a.col_count();
	var v = new Array(rows * cols);
	for (var r = 0; r < rows; ++r)
	for (var c = 0; c < cols; ++c)
	{
		v[r * cols + c] = a[r][c];
	}

	return v; 
}

Array.prototype.add = function(arg)
{
	var me = this;
	arg = me.promote_to_mat(arg);
	if (!me.same_rank_as(arg)) { return []; }

	return me.new_mat().for_each(function (M, r, c) {
		M[r][c] = me[r][c] + arg[r][c];
	});
}

Array.prototype.sub = function(arg)
{
	var me = this;
	arg = me.promote_to_mat(arg);
	if (!me.same_rank_as(arg)) { return []; }

	return me.new_mat().for_each(function (M, r, c) {
		M[r][c] = me[r][c] - arg[r][c];
	});
}

Array.prototype.mul = function(arg)
{
	var me = this;
	arg = me.promote_to_mat(arg);
	if (!me.same_rank_as(arg)) { return []; }

	return this.new_mat().for_each(function (M, r, c) {
		M[r][c] = me[r][c] * arg[r][c];
	});
}

Array.prototype.div = function(arg)
{
	var me = this;
	arg = me.promote_to_mat(arg);
	if (!me.same_rank_as(arg)) { return []; }

	return this.new_mat().for_each(function (M, r, c) {
		M[r][c] = me[r][c] / arg[r][c];
	});
}

Array.prototype.sum = function()
{
	var s = 0;
	this.for_each(function (M, r, c) {
		s += M[r][c];
	});

	return s;
}

Array.prototype.dot = function(arg)
{
	if (this.row_count() > 1 || arg.row_count() > 1) { return NaN; }
	if (!this.same_rank_as(arg)) { return NaN; }
	return this.mul(this).sum();
}

Array.prototype.mag = function()
{
	return Math.sqrt(this.dot(this));
}
