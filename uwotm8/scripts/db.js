function(context, args)
{
	var caller = context.caller;
	var l = #s.scripts.lib();
	return { ok:true , msg: #db.f({}).array()};
}
