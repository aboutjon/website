require 'rubygems'
require 'sinatra'
require 'haml'
require 'sass'

class Website < Sinatra::Application
	enable :logging
	set :environment, :production
	set :port, 80

	get '/' do
		@title = 'Projects'

		@og_image = 'http://aboutjon.com/img/profile_pic.jpg'
		@og_url = 'http://aboutjon.com'
		@og_title = 'Projects'
		@og_description = "Awesome projects I've worked on or am working on currently."
		haml :index
	end

	get '/css/style.css' do
		sass :style
	end

	get '/css/mobile.css' do
		sass :mobile
	end
end