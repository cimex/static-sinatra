require "rubygems"
gem "rspec"
require 'spec/autorun'

describe "searching static files for error strings" do

  pageError = false
  stringsToSearchFor = ["error","sinatra"]
  static_html_paths = Dir.glob('../static/**/*.html')

  static_html_paths.each do |file|
    it "file: "+file+" should not contain error strings" do
      stringsToSearchFor.each do |errorStr|
        if File.open(file).grep(/#{errorStr}/i).size > 0
          pageError = true
        end
      end
      begin
        pageError.should == false
      rescue ExpectationNotMetError
        @verification_errors << $!
      end
    end
  end

end
