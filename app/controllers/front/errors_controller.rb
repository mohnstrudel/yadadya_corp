class Front::ErrorsController < FrontController
  def not_found
    render(:status => 404)
  end

  def internal_server_error
    render(:status => 500)
  end

  def robots
    respond_to :text
    expires_in 6.hours, public: true
  end
end
