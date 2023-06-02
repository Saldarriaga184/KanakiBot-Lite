FROM fedora:37

RUN sudo dnf -y update &&\
    sudo dnf install -y https://mirrors.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm https://mirrors.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm &&\
    sudo dnf install -y git ffmpeg ImageMagick nodejs libwebp &&\
    sudo dnf clean all -y

RUN git clone https://github.com/Saldarriaga184/KanakiBot-Lite

WORKDIR /root/KanakiBot-Lite

COPY ./root/KanakiBot-Lite 

CMD ["node", "index.js"]
