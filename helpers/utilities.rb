module Sinatra::Utilities

  def first_token hash
    if hash[:rewrite].nil?
      url = "/"+convert_to_url_token(hash[:title])
    else
      url = "/"+hash[:rewrite].to_s
    end
    url
  end

  def rel_path
    r = request.path_info.to_s
    num_of_slashes = r.gsub(/[a-zA-Z]|-|_|\./,'').length
    s = "../"
    path =''
    (num_of_slashes-1).times do
     path+=s
    end
    # strange bug happening here where six ../'s are created,
    # there should never be more than 5
    path = "../../../../../" if path == "../../../../../../"
    path
  end
  
  def convert_to_url_token string
    return url = string.gsub(' / ','-').gsub(' ','-').gsub('?','').gsub('&','and').gsub("'",'').downcase.gsub('video:-','').gsub('oba-','OBA-')
  end

  def is_last? idx, array_name
    return true if (idx == array_name.length - 1)
  end

  def url_match? input
    if input.class == String
      return true if request.fullpath.include? input
    elsif input.class == Hash
      input.each_value do |str|
        return true if request.fullpath.include? str
      end
    elsif input.class == Array
      input.each do |str|
        return true if request.fullpath.include? str.to_s
      end
    end
  end

  def partial(template, *args)
    template_array = template.to_s.split('/')
    template = template_array[0..-2].join('/') + "/_#{template_array[-1]}"
    options = args.last.is_a?(Hash) ? args.pop : {}
    options.merge!(:layout => false)
    if collection = options.delete(:collection) then
      collection.inject([]) do |buffer, member|
        buffer << haml(:"#{template}", options.merge(:layout =>
        false, :locals => {template_array[-1].to_sym => member}))
      end.join("\n")
    else
      haml(:"#{template}", options)
    end
  end

  def num_array 
    num_array = ["one", "two", "three", "four", "five", "six", "seven"]
  end

end