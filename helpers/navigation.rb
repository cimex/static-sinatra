module Sinatra::Navigation

  def navigation_reptiles
    navigation_reptiles = [
      {
        :title => "Classification",
        :children => [
          {:title => "History of classification", :rewrite => "history"},
          {:title => "Taxonomy"}
        ]
      },
      {
        :title => "Systems",
        :rewrite => "sys",
        :children => [
          {:title => "Circulatory"},
          {:title => "Respiratory",
           :children => [
             {:title => "Reptilian lungs", :rewrite => "lungs"},
             {:title => "Turtles and tortoises"},
             {:title => "Palate"}
           ]
          },
          {:title => "Evolutionary history"}
        ]
      }
    ]
  end

  def navigation_fish
    navigation_fish = [
      {
        :title => "Importance to humans",
        :children => [
          {:title => "Economic importance"},
          {:title => "Recreation"}
        ]
      },
      {
        :title => "Anatomy",
        :rewrite => "anatomy-of-fish",
        :children => [
          {:title => "Respiration"},
          {:title => "Sensory and nervous system", :rewrite => "sns",
           :children => [
             {:title => "Central nervous system", :rewrite => "cns"},
             {:title => "Sense organs"},
             {:title => "Capacity for pain", :rewrite => "pain"}
           ]
          },
          {:title => "Scales"}
        ]
      }
    ]
  end


end
