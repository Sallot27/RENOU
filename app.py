# -*- coding: utf-8 -*-
import os
from flask import Flask, render_template
import config

app = Flask(__name__)


def music_file_exists():
    path = os.path.join(app.static_folder, "audio", config.MUSIC_FILE)
    return os.path.isfile(path) and os.path.getsize(path) > 0


@app.route("/")
def index():
    return render_template(
        "index.html",
        her_name=config.HER_NAME,
        my_name=config.MY_NAME,
        hero_title=config.HERO_TITLE,
        hero_subtitle=config.HERO_SUBTITLE,
        hero_button=config.HERO_BUTTON,
        anniversary_date=config.ANNIVERSARY_DATE,
        anniversary_label=config.ANNIVERSARY_LABEL,
        love_letter_title=config.LOVE_LETTER_TITLE,
        love_letter_body=config.LOVE_LETTER_BODY,
        things_i_love=config.THINGS_I_LOVE,
        timeline=config.TIMELINE,
        gallery=config.GALLERY,
        final_title=config.FINAL_TITLE,
        final_message=config.FINAL_MESSAGE,
        final_signature=config.FINAL_SIGNATURE,
        enable_music=config.ENABLE_MUSIC and music_file_exists(),
        music_file=config.MUSIC_FILE,
        site_title=config.SITE_TITLE,
    )


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=False)
