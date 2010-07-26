desc "save static html to 'static' directory..."
task :build do

  require 'rake'
  require 'sinatra'
  require 'app'

  @request = Rack::MockRequest.new(Sinatra::Application)
  haml_view_paths = Dir.glob('views/pages/**/*.haml').map {|path| path[0..-6].sort_by {|view| view.length } }

  def create_dirs static_view_path

    dir = File.dirname(static_view_path)

    unless File.directory?(dir)
      puts "making dir : "+dir
      FileUtils.mkdir_p(dir)
    end

  end

  def create_files rack_url, static_view

    if rack_url.include? "index"
      index_url = rack_url.sub('index','')
      puts "creating "+static_view +".html"
      File.open(static_view+".html", 'w'){|f| f.print @request.get(index_url+'index.html').body}
    else
      puts "creating "+static_view +".html"
      File.open(static_view+".html", 'w'){|f| f.print @request.get(rack_url+'.html').body}
    end
  end

  haml_view_paths.each do |haml_path|

    static_view_path = haml_path.to_s.sub(/views\/pages/,'static')
    rack_url = haml_path[0].sub(/views\/pages/,'')
    create_dirs(static_view_path)
    create_files(rack_url, static_view_path)

  end

end

desc "export the standalone version to a 'site' directory above the root"
task  :export  do
  system "export --force public/ ../site"
  system "export --force static/ ../site"
end