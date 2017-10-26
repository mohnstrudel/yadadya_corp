module FrontHelper

  def get_header_class
    # debug
    if action_name == 'home'
      return 'g-header_main'
    else
      return 'g-header_open g-header_white'
    end
  end

  def header_nav_link(name, link_path, options={}, &block)
    url = request.path_info
    class_name = url.include?(link_path) ? 'g-menu__list-item_active' : ''

    additional_class = " #{options[:class]}"

    link_to name, link_path, class: "g-menu__list-item #{class_name}#{additional_class}", &block
  end

end
