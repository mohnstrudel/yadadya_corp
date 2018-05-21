class FrontController < ApplicationController
  layout 'front'

  before_action :redirect_if_old

  protected

  def redirect_if_old
    if request.host == 'yadadya.com'
      redirect_to "#{request.protocol}atomic-digital.ru#{request.fullpath}", :status => :moved_permanently 
    end
  end
end
