module Front::MarkdownHelper

  require 'redcarpet/render_strip'

  def markdown(text, length = nil)
    return "" if text.nil?
    options = {
      filter_html:     true,
      hard_wrap:       true,
      link_attributes: { rel: 'nofollow', target: "_blank" },
      space_after_headers: true,
      fenced_code_blocks: true
    }

    extensions = {
      autolink:           true,
      superscript:        true,
      disable_indented_code_blocks: true
    }

    if length.present?
      text = text[0,length]
      if text.last == " "
        text << "..."
      else
        text << " ..."
      end
    end

    # renderer = Redcarpet::Render::StripDown
    renderer = Redcarpet::Render::HTML.new(options)
    markdown = Redcarpet::Markdown.new(renderer, extensions)

    # postprocess(text)
    markdown.render(text).html_safe

  end

  def postprocess(full_document)
    Regexp.new(/\A<p>(.*)<\/p>\Z/m).match(full_document)[1] rescue full_document
  end

end