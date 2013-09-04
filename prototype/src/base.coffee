define ['./tpl',  './constants'], (tpl, constants)->

	class BaseView extends Backbone.View		
		log:()->
			console.log.apply(console, arguments)

		the_tpl:()->
			return tpl

		the_constants:()->
			return constants

		register: (widget_context)->
			@widget_context = widget_context
			@post_register()

		set_click:(evt_name, evt_value)->
			# just the append a time stamp so that, the value would be different

			evt_value = evt_value + ';' + (new Date()).valueOf()
			console.log 'set_click', evt_name, evt_value
			@widget_context.set evt_name, evt_value


		get_click:(evt_name)->
			console.log 'evt_name:', evt_name, '@widget_context', @widget_context.toJSON()
			ret = @widget_context.get evt_name
			console.log 'ret', ret
			return ret.split(';')[0]

		post_register: ()->


	return {
		'BaseView': BaseView,
	}
