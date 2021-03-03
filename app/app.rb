require 'sinatra/base'

class Thermostat < Sinatra::Base
  get '/' do
    send_file 'app/index.html'
  end
end