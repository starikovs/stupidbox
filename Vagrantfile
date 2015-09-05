# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.provision "shell", inline: "sudo apt-get -y update > /dev/null"
  config.vm.provision "docker" do |d|
    d.build_image "/vagrant",
      args: "-t stupidbox"
    d.run "stupidbox",
      args: "-v /vagrant:/usr/share/nginx/html -p 80:80"
  end
  config.vm.provision "shell", privileged: false,  path: "Vagrantprovision.sh"
  config.vm.network "forwarded_port", guest: 80, host: 8082

  # First docker service is run and then vagrant mounts files to /vagrant, so volumes are incorrect when
  # docker service is started. So, restart docker after all the files in /vagrant exists.
  config.vm.provision "shell", inline: "service docker restart", run: "always"
end

