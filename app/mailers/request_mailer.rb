class RequestMailer < ApplicationMailer
  default from: 'Заявка на сайте <form@atomic-digital.ru>'
  layout 'mailer'

  def notify_admin(request)
    @request = request
    @request.attachments.each do |attach|
      filename = attach.file.filename
      attachments[filename] = File.read(attach.path)
    end
    mail to: "info@atomic-digital.ru, dima@atomic-digital.ru", subject: "Новая заявка на сайте atomic-digital.ru"
  end
end
