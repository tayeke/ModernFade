class @ModernFade
	constructor: (@wrapper, _options = {}) ->
		@elements = document.querySelectorAll("#{@wrapper} > *")
		@index    = @elements.length-1
		@elements[@index].className += 'in'
		@options  = @mergeAttributes _options,
			delay: 2000
			time:  1600
		
		@startTimeout()

	transition: =>
		@log('Start Transition')

		@t_out = @elements[@index]
		@next = if @index-1 >= 0 then @index-1 else @elements.length-1
		@t_in  = @elements[@next]

		@t_out.className = @t_out.className.replace 'in',''
		@t_out.className += "out"
		@t_in.className  += "in"

		setTimeout @afterTransition, @options.time

	afterTransition: =>
		@log('End Transition')

		@t_out.className = @t_out.className.replace "out",""
		@index = @next
		@startTimeout()

	startTimeout: =>
		setTimeout @transition, @options.delay

	refresh: (_index) =>
		@elements = document.querySelectorAll("#{@wrapper} > *")
		@index = _index if _index


	mergeAttributes: (obj1, obj2) =>
		obj3 = {}
		for key, val of obj2
			obj3[key] = val
		for key, val of obj1
			obj3[key] = val
		return obj3

	log: (msg) =>
		console.log 'ModernFade', msg

