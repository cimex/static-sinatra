module Sinatra::Navigation

  def has_checklist?
    if request.fullpath.include? "characteristics"
      return true
    elsif request.fullpath.include? "bad habits"
      return true
    else return false
    end
  end

  def navigation_reptiles
    navigation_reptiles = [
      {
        :title => "",
        :children => [
          {:title => ""},
          {:title => ""}
        ]
      },
      {
        :title => "",
        :rewrite => "",
        :children => [
          {:title => ""},
          {:title => "",
           :children => [
             {:title => "", :rewrite => ""},
             {:title => "", :rewrite => ""},
             {:title => "", :rewrite => ""}
           ]
          },
          {:title => ""}
        ]
      }
    ]
  end

  def navigation_fish
    navigation_fish = [
      {
        :title => "",
        :children => [
          {:title => ""},
          {:title => ""}
        ]
      },
      {
        :title => "",
        :rewrite => "",
        :children => [
          {:title => ""},
          {:title => "",
           :children => [
             {:title => "", :rewrite => ""},
             {:title => ""},
             {:title => ""},
             {:title => ""}
           ]
          },
          {:title => ""}
        ]
      }
    ]
  end


end
