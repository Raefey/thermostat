require 'pg'

task :full_setup do
  Rake::Task[:create_db].execute
  Rake::Task[:create_table].execute
  Rake::Task[:populate_table].exectute
end

task :create_db do
  dbname = 'thermostat'
  p "RAKE: creating #{dbname} database"
  PG.connect.exec("CREATE DATABASE #{dbname};")
end

task :create_table do
  dbname = 'thermostat'
  p "RAKE: creating thermostat_data table in #{dbname} database"
  con = PG.connect :dbname => dbname
  con.exec('CREATE TABLE thermostat_data(id SERIAL PRIMARY KEY, '\
  'temperature VARCHAR(3), powersave VARCHAR(5), city VARCHAR(100));')
end

task :populate_table do
  dbname = 'thermostat'
  p "RAKE: creating #{dbname} database"
  con = PG.connect :dbname => dbname
  con.exec("INSERT INTO thermostat_data(temperature, powersave, city) "\
  "VALUES('20', "\
  "'on', "\
  "'London, uk');")
end
