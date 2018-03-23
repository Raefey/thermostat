require 'sinatra/base'
require 'pg'

class ThermostatAPI < Sinatra::Base

  get '/' do
    redirect '/data'
  end

  get '/data' do
    con = PG.connect(dbname: 'thermostat')
    @data = con.exec('SELECT * FROM thermostat_data;')
    erb :data
  end

  post '/data' do
    con = PG.connect(dbname: 'thermostat')
    con.exec('TRUNCATE TABLE thermostat_data RESTART IDENTITY;')
    con.exec("INSERT INTO thermostat_data(temperature, powersave, city) "\
    "VALUES(#{params[:temperature]}, "\
    "#{params[:powersave]}, "\
    "#{params[:city]});")
  end

  run! if app_file == $0
end
