class RequestMailer < ApplicationMailer
  default from: 'Заявка на сайте <form@yadadya.com>'
  layout 'mailer'

  def notify_admin(request)
    @request = request
    @request.attachments.each do |attach|
      filename = attach.file.filename
      attachments[filename] = File.read(attach.path)
    end
    mail to: "info@yadadya.com", subject: "Новая заявка на сайте yadadya.com"
  end
end
