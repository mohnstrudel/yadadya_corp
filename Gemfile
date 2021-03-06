source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails'
# Use postgresql as the database for Active Record
gem 'pg'
# Use Puma as the app server
gem 'puma'
# Use SCSS for stylesheets
gem 'sass-rails'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails'



# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 3.0'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

# CUSTOM GEMS
gem 'browser'
gem 'haml-rails'
# что бы юзать yarn
gem 'webpacker'
gem "figaro"
gem 'delayed_job_active_record'
gem 'capistrano3-delayed-job'
gem 'metamagic'

gem 'listen', '~> 3.1.5'

# Use CKEditor for html formatting
gem 'ckeditor'
gem 'redcarpet' # Redcarpet markdown editor
# gem 'bootsy' # Screw CKEditor, it's not working on production! 
gem 'carrierwave' # Required for images upload using ckeditor and in general
gem 'mini_magick' # Required for image processing

# Use font awesome and Glyphicons
gem "font-awesome-rails"
gem 'bootstrap-glyphicons'

# Use Devise for handling users
gem 'devise'

gem 'will_paginate'
gem 'friendly_id'

gem 'russian'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  gem 'capistrano'
  gem 'capistrano-rvm'
  gem 'capistrano-rails'
  gem 'capistrano-bundler'
  gem 'capistrano3-puma'
  gem 'capistrano-nvm', require: false
  gem 'capistrano-yarn'

  gem 'capistrano-figaro-yml'
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console', '>= 3.3.0'

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
