module Sinatra::Custom

  def audience_name_title audience_name
    if audience_name == "dogs"
      title = "The life and history of dogs"
    elsif audience_name == "iguanas"
      title = "An introspective into the life of Iguanas"
    elsif audience_name == "camels"
      title = "How camels deal with sandstorms"
    title
    end
  end

end