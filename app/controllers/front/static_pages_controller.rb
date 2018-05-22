class Front::StaticPagesController < FrontController

  
  before_action :set_page_loading_time


  def home
  end

  def about
  end

  def contact
  end

  def blog
  end

  def projects
  end

  private

  def set_page_loading_time
    # Delete old timers
    session.delete(:timer_1)
    session.delete(:timer_2)
    # Setup new
    session[:timer_1] = Time.now
  end
end
